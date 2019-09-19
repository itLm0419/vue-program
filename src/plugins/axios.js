import axios from "axios";
// 封装 fetch
["get", "delete", "head", "options", "post", "put", "patch"].forEach(method => {
  axios["$" + method] = (url, data, config) => {
    return new Promise((resolve, reject) => {
      axios[method](url, data, config)
        .then(response => {
          resolve(response && response.data);
        })
        .catch(error => {
          reject(error);
        });
    });
  };
});

// 客户端类型
axios.defaults.headers.common["X-Client-Type"] = "PC";

// 请求拦截
axios.interceptors.request.use(
  config => {
    console.log("config", config);
    return config;
  },
  error => {
    error.messageHandle = Message.error("请求超时");
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    if (response.data) {
      // 处理 YApi 中定义的错误
      if (response.data.errcode && response.data.errmsg) {
        Message.error("YApi: " + response.data.errmsg);
        throw {
          message: "YApi: " + response.data.errmsg
        };
      }
    }

    return response;
  },
  error => {
    output(error);
    var message;
    const code = parseInt(error.response && error.response.status);
    switch (code) {
      case 403:
        // message = "操作受限，请联系管理员处理";
        alert("操作受限，请联系管理员处理")
        break;
      case 404:
        // message = `请求的资源 ${error.config.url} 不存在`;
        alert(`请求的资源 ${error.config.url} 不存在`)
        break;
      case 504:
        // message = "网络故障，请联系管理员处理";
        alert("网络故障，请联系管理员处理")
        break;
      case 500:
        // message = "网络错误，请联系管理员处理";
        alert("网络错误，请联系管理员处理")
        break;
      default:
        // message = `请求资源 ${error.config.url} 失败`;
        alert(`请求资源 ${error.config.url} 失败`)
        break;
    }
    if (message) {
      error.messageHandle = Message.error(message);
    }
    return Promise.reject(error);
  }
);

function output(error) {
  try {
    var lines = [];
    lines.push("---------- axios error ----------");
    if (error.request && error.request.responseURL) {
      lines.push(`url: ${error.request.responseURL}`);
    } else if (error.config && error.config.url) {
      lines.push(`url: ${error.config.url}`);
    }
    if (error.config) {
      lines.push(`method: ${error.config.method}`);
      lines.push(`data: ${error.config.data}`);
    }
    if (error.request) {
      lines.push(
        `responseText: ${error.request.responseText || error.request.response}`
      );
      lines.push(`status: ${error.request.status}`);
      lines.push(`statusText: ${error.request.statusText}`);
    }
    console.error(lines.join("\n"));
  } catch (e) {
    console.log(error);
  }
}

export default axios;
