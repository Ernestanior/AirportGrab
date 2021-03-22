# Express - crud

## 起步

- 初始化
- 模板处理

## 路由设计
| 请求方法 | 请求路径        | get参数 | post参数           | 备注 |
|GET       |/students       |         |                   |渲染页面|
|GET       |/students/new   |         |                   |渲染添加新学生|
|POST      |/students       |         |name,age,genders   |处理添加请求|
|GET       |/students/edit  |  id     |                   |学生详情页面|
|POST      |/students/edit  |         |id,name,age,genders|处理修改请求|
|GET       |/students/delete|  id     |                   |处理删除请求|
