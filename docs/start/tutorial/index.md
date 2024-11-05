# 制作基岩版3D皮肤包
请保证已看完 [皮肤包注意事项](/start/not1024/) 以及 [入门知识](/start/)

### 1. 保存皮肤
完成设计后，将皮肤保存为PNG格式，并命名为`<skin_name>.png`。

### 2. 创建皮肤包结构
- 创建一个文件夹，命名为你的皮肤包名称，例如`My_Skin_Pack`。
- 该文件夹结构如下
```
My_Skin_Pack
├── manifest.json
├── skins.json
├── <skin_name>.png
└── text
    └── zh_cn.lang
```
- 在该文件夹内创建以下文件和文件夹：

### 3. 创建manifest.json
创建一个名为`manifest.json`的文件，并填入以下内容：
```json
{
  // 定义了皮肤包的格式版本
  "format_version": 2,
  // 皮肤包的头部信息
  "header": {
    // 皮肤包的名称
    "name": "你的皮肤包名称",
    // 皮肤包的唯一标识符
    "uuid": "你的皮肤包唯一标识符",
    // 皮肤包的版本号
    "version": [1, 0, 0]
  },
  // 皮肤包的模块列表
  "modules": [
    {
      // 模块的类型，这里是皮肤包
      "type": "skin_pack",
      // 模块的唯一标识符
      "uuid": "你的皮肤包模块唯一标识符",
      // 模块的版本号
      "version": [1, 0, 0]
    }
  ]
}

```
###### uuid是什么
UUID是一个标准化的唯一性标识符，用于计算机系统中以识别信息。以确保每个UUID都是独一无二的。UUID广泛应用于数据库、网络协议、软件配置文件等领域，用于确保在不同系统和应用程序中标识符的唯一性。
###### 如何生成uuid
推荐苦力怕论坛的 [uuid生成器](https://klpbbs.com/tool/uuid/)

# 4. 创建skins.json
创建一个名为`skins.json`的文件，并填入以下内容：
```json
{
  //皮肤列表
  "skins": [
    {
      //皮肤的本地化名称，用于在游戏界面中显示
      "localization_name": "Skin",
      //皮肤的模型，定义了皮肤的外观
      "geometry": "geometry.humanoid.xxx",
      //皮肤的纹理文件名，这个文件必须包含在皮肤包中
      "texture": "xxx.png",
      //皮肤类型，通常标记为 "free"
      "type": "free"
    },
  ],
  //皮肤包的序列化名称，用于内部识别
  "serialize_name": "示例皮肤包",
  //皮肤包的本地化名称，用于在游戏界面中显示
  "localization_name": "示例皮肤包"
}
```
# 5. 创建zh_cn.lang
创建一个名为`zh_cn.lang`的文件，并填入以下内容：
```lang
  "Skin": "皮肤名称"
```
# 6. 打包皮肤包
将你的皮肤包文件夹压缩为一个ZIP文件，把后缀该为`.mcpack`。

# 7. 上传皮肤包
将你的皮肤包导入到MC即可
