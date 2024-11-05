# Minecraft JSON文件详解

在《我的世界》中，皮肤包允许玩家自定义角色的外观。本文档旨在详细解释皮肤包的JSON文件结构，以便玩家和开发者能够理解和创建自定义皮肤包。

## JSON文件结构

### 根对象

皮肤包的JSON文件是一个包含皮肤包元数据和皮肤列表的根对象。

```json
{
  //皮肤列表
  "skins": [
    {
      //皮肤的本地化名称，用于在游戏界面中显示
      "localization_name": "Skin1",
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
#### 皮肤列表（skins）
皮肤列表是一个数组，包含了皮肤包中所有皮肤的对象。

#### 皮肤对象属性
- localization_name：皮肤的本地化名称，用于在游戏界面中显示
- geometry：皮肤的几何形状，定义了皮肤的外观，下面是原版默认的模型
```json
Alex 细手臂
geometry.humanoid.customSlim
Steve 粗手臂
geometry.humanoid.custom
```
- texture：皮肤的纹理文件名，这个文件必须包含在皮肤包中
- type：皮肤类型，通常标记为 "free"
#### 皮肤包元数据
- serialize_name：皮肤包的序列化名称，用于内部识别。
- localization_name：皮肤包的本地化名称，用于在游戏界面中显示。