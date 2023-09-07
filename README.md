


# GPT Commit

VS Code extension which helps to generate AI commit messages using ChatGPT.
## TODO 
- [ ] 允许用户自定义提示词模板   systemPrompt


## Features

You can generate commit message by pressing 'Generate AI commit' button in source control tab:

![Example of usage](assets/images/example.gif)

> Tip: You could also generate commit from command pallete by calling 'Generate AI commit' command.

## Requirements

You need Open AI API Key to make this extension work.
You can get your API key from [OpenAI](https://platform.openai.com/account/api-keys).

## Extension Settings

GPT Commit extension contributes the following settings:

### Appearance

- `gptcommit@li.appearance.delimeter`: Delimeter between commit lines

### General

- `gptcommit@li.general.generator`: Generator used to create commit messages. Available options: ChatGPT
- `gptcommit@li.general.messageApproveMethod`: Method used to approve generated commit message. Available options: Quick pick, Message file

### OpenAI

- `gptcommit@li.openAI.apiKey`: OpenAI API Key. Needed for generating AI commit messages
- `gptcommit@li.openAI.gptVersion`: Version of GPT used by OpenAI
- `gptcommit@li.openAI.customEndpoint`: Custom endpoint URL for OpenAI API
- `gptcommit@li.openAI.temperature`: Controls randomness. Lowering results in less random completions. As the temperature approaches zero, the model will become deterministic and repetitive
- `gptcommit@li.openAI.maxTokens`: The maximum number of tokens to generate. Requests can use up to 2048 tokens shared between prompt and completion

## Release Notes
### 1.0.8
- 增加自定义提示词模板配置
- 增加预设2个模板风格
- 优化提示词，使得AI能够更加稳定的出现git commit

### 1.0.7

### 1.0.6 
- 支持中文
- QuickPick 模式不再弹窗提示，直接进入
- 默认模板增加Summay的处理，对本地修改简单总结

### 1.0.0

Initial release of GPT Commit

### 1.0.1

Updated icons

### 1.0.2

Fixed UX

### 1.0.3

Added Open AI API Key input prompt

### 1.0.4

Updated commit formatting. Added new setting

### 1.0.5

Added new advanced configuration for ChatGPT.\
Added new option to accept and edit generated commit via temp message file. (Thanks for help [chenweiyi](https://github.com/chenweiyi))\
Added option to set custom ChatGPT endpoint URL. (Thanks for help [aiyogg](https://github.com/aiyogg))\
Fixed issue with git on windows (Issue [#5](https://github.com/dmytrobaida/GPTCommitVSCode/issues/5))\
Added option to select different ChatGPT version (Issue [#6](https://github.com/dmytrobaida/GPTCommitVSCode/issues/6))\
Set default ChatGPT version to gpt-3.5-turbo-16k

## License

Released under [MIT](/LICENSE) by [@dmytrobaida](https://github.com/dmytrobaida).
