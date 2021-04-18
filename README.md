
# VSCode flomo

基于 VSCode 的[浮墨](https://flomoapp.com/)插件. 在 VSCode 中一键发布你的想法.

## Configuration

在 [settings](https://code.visualstudio.com/docs/getstarted/settings) 搜索 `flomo`, 填入你的 `API Key`. 或者直接在配置里添加一行:

```json
{
  "flomo.publicApiKey": "https://flomoapp.com/iwh/Mg/yourapisecretskey/"
}
```

关于如何获取 `API Key` 请参考官方文档: [找到你的 API key](https://help.flomoapp.com/advance/extension#zhao-dao-ni-de-api-key)

注意: 浮墨的 `API Key` 只有 Pro 用户可用, 非 Pro 用户无法通过 `API Key` 发布想法, 更多请参考 [会员介绍](https://help.flomoapp.com/membership/pro) 和 [一些福利](https://help.flomoapp.com/membership/gift)

## Features

目前提供两个方式发布想法到浮墨:
- 通过 `input box` 发布短想法
- 在文档中发布想法

### Short idea

在 [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette) 中输入 `flomo` 搜索 `flomo: Post your to flomo`. 输入想法后确认即将该想法发送到浮墨中

![short idea demo](https://raw.githubusercontent.com/hacker0limbo/vscode-flomo/master/images/short-idea-demo.gif)

### Document thought

另一种方式是以文档方式发布想法, 随机打开一个文档写入你的想法, 这个文档可以不用保存在本地. 点击右上角的浮墨图标, 即可将整个文档内容发送到浮墨.

同时也可以在文档中右击, 选择 `Post thought to flomo` 发送整个文档. 也可以进行选中, 选中文档中的部分文字右击选择 `Post selected thought to flomo` 发送选中部分文字

支持多选, 在多选下发送会将选中的多个片段分别记录到浮墨

![document thought demo](https://raw.githubusercontent.com/hacker0limbo/vscode-flomo/master/images/document-thought-demo.gif)

## Backers

感谢[浮墨](https://flomoapp.com/)提供的 `API`, 同时感谢 [Lennon Cheng](https://github.com/lennonzf) 制作插件的 logo 和 icon