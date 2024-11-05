# 准备
入门知识
## 认识json
JSON 命名空间对象包含用于解析 JavaScript 对象表示法（JSON）和将值转换为 JSON 字符串的静态方法。

#### 描述
与大多数全局对象不同， 不是一个构造函数。不能将它与 new 运算符 一起使用，也不能将 对象作为函数调用。JSON` 的所有属性和方法都是静态的（就像 Math 对象一样）。JSON的键必须是字符串，而值可以是字符串、数字、布尔值、对象或数组。此外，JSON不支持注释，因此在JSON文件中不应该包含任何注释。

#### JavaScript 与 JSON 的区别
JSON 是一种语法，用来序列化对象、数组、数值、字符串、布尔值。它基于 JavaScript 语法，但与之不同：大部分 JavaScript 不是 JSON。例如：

#### 对象和数组
属性名称必须是双引号括起来的字符串；禁止出现尾随逗号。

#### 数值
禁止出现前导零。小数点后必须至少有一位数字。不支持 和 。NaNInfinity

## 3D/4D/5D皮肤的区别

##### 3D皮肤
3D皮肤是指只有64x64,128x128的标准皮肤贴图，只能使用原版的模型文件，无法使用4D/5D模型，但是也是唯一 一种支持```.mcpack```文件导入的皮肤包。
![图片](/3D示例.png)

##### 4D皮肤
4D皮肤是指使用原版的模型文件制作的皮肤，它可以让玩家在游戏中拥有自定义的外观，可以使用 [Blockbench](https://www.blockbench.net/) 制作4D模型，导出旧版模型

![图片](/4D示例.png)

##### 5D皮肤
5D皮肤是指使用obj转json制作的高清皮肤，它可以让玩家在游戏中拥有更加逼真的外观，可以使用 [Blender](https://www.blender.org/) 制作5D皮肤，导出obj模型，然后使用 [Skinstudio](https://mrarm.io/skinstudio/) 转换为json。5D皮肤通常具有更加真实的细节和更加细腻的外观，因此在游戏中更加吸引人。

![图片](/5D示例.png)

## 工具选择
在编写《我的世界》的JSON文件时，有许多工具可供选择，这些工具可以帮助你更轻松地创建、编辑和验证JSON文件。以下是一些常用的工具：
#### 电脑

文本编辑器：如[Notepad++](https://notepad-plus-plus.org/downloads/)、[Sublime Text](https://www.sublimetext.com/)、[Visual Studio Code](https://code.visualstudio.com/)等，这些编辑器提供了语法高亮、自动补全等功能，有助于编写JSON文件。

在线JSON编辑器：如[JSON Editor Online](https://jsoneditoronline.org/)、[Code Beautify JSON Editor](https://codebeautify.org/online-json-editor)等，这些工具允许你在浏览器中直接编辑JSON文件，并且通常提供了实时预览和格式化功能。

命令行工具：如jq，这是一个强大的命令行JSON处理器，可以用于解析、过滤、转换和验证JSON文件。

集成开发环境（IDE）：如[IntelliJ IDEA](https://www.jetbrains.com/idea/)、[Eclipse](https://www.eclipse.org/downloads/)等，这些IDE提供了丰富的功能，包括JSON编辑、代码提示、调试等。

JSON Schema验证工具：如[Ajv](https://ajv.js.org/)、[JSON Schema Validator](https://www.jsonschemavalidator.net/)等，这些工具可以帮助你验证JSON文件是否符合特定的JSON Schema。

###### 选择哪种工具取决于你的具体需求和偏好。如果你是初学者，建议从文本编辑器或在线JSON编辑器开始，这些工具通常比较容易上手
#### 手机
在手机上编写和编辑JSON文件可能不如在电脑上那么方便，但仍然有一些工具可以帮助你完成这项任务。以下是一些适用于手机的JSON编辑工具：


##### Android: [MT管理器-强烈推荐](https://mt2.cn/)、[QuickEdit](https://rhmsoft.com/?p=283)、[Jota+](https://www.ghxi.com/jota.html)
##### iOS: [Textastic](https://www.textasticapp.com/)

请根据你的具体需求和手机操作系统选择合适的工具。如果你需要频繁地编辑JSON文件，可能需要考虑使用更专业的代码编辑器应用或在线工具。


