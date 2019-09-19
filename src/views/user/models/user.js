
import md5 from "js-md5";
import axios from "axios"
/**
 * 登入
 */
export async function login({ username, password }) {
  return new Promise((resolve, reject) => {
    axios.post('/api/token',{
      username: username,
      password: md5(password)
    })
      .then(response => {
        resolve(response && response.data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

/**
 * 登出
 */
// export async function logout() {
//   await parseApi.$post("/logout");
// }

/**
 * 当前用户权限
 */
export async function findMyPermissions() {
  // const myPermissions = (await functionsApi.$post("/myPermissions")).result;

  // myPermissions.sort((a, b) => a.index - b.index);

  // // 菜单树
  // var menus = [];

  // // 权限字典
  // var permissions = {};

  // for (const x of myPermissions) {
  //   permissions[x.name] = true;

  //   // 添加模块菜单
  //   if (x.type === 0) {
  //     menus.push(x);
  //   }
  // }

  // 添加模块下的页面菜单
  // for (const menu of menus) {
  //   for (const permission of myPermissions) {
  //     if (permission.parent === menu.name) {
  //       if (!menu.children) {
  //         menu.children = [];
  //       }
  //       menu.children.push(permission);
  //     }
  //   }
  // }

  return {
    // permissions,
    // menus
  };
}
