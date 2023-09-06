import { z } from "zod";
import * as vscode from "vscode";

import { DeepKey } from "./types";

const configurationSchema = z.object({
  appearance: z.object({
    delimeter: z.string().optional(),
  }),
  general: z.object({
    generator: z
      .enum(["ChatGPT"])
      .default("ChatGPT")
      .catch("ChatGPT")
      .optional(),
      promptType: z
      .enum(["自定义","模板1","模板2"])
      .default("模板1")
      .catch("模板1")
      .optional(),
    systemPrompt: z.string().optional(),
    messageApproveMethod: z
      .enum(["Quick pick", "Message file"])
      .default("Quick pick")
      .catch("Quick pick")
      .optional(),
  }),
  openAI: z.object({
    apiKey: z.string().optional(),
    gptVersion: z
      .enum([
        "gpt-4",
        "gpt-4-0613",
        "gpt-4-32k",
        "gpt-4-32k-0613",
        "gpt-3.5-turbo",
        "gpt-3.5-turbo-0613",
        "gpt-3.5-turbo-16k",
        "gpt-3.5-turbo-16k-0613",
      ])
      .default("gpt-3.5-turbo-16k")
      .catch("gpt-3.5-turbo-16k")
      .optional(),
    customEndpoint: z.string().optional(),
    temperature: z.number().optional(),
    maxTokens: z.number().optional(),
  }),
});

export type Configuration = z.infer<typeof configurationSchema>;

export async function setConfigurationValue(
  key: DeepKey<Configuration>,
  value: any
) {
  const configuration = vscode.workspace.getConfiguration("gptcommit@li");
  await configuration.update(key, value, vscode.ConfigurationTarget.Global);
}

export function getConfiguration() {
  const configuration = vscode.workspace.getConfiguration("gptcommit@li");
  return configurationSchema.parse(configuration);
}
