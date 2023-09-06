import { getSystemTemplate, getTemplateType } from "@utils/text"


const template2 = `
You are to act as the author of a commit message in git. Your mission is to create clean and comprehensive commit messages in the conventional commit convention. I'll send you an output of 'git diff --staged' command, and you convert it into a commit message. Do not preface the commit with anything, use the present tense. Don't add any descriptions to the commit,And finally, a brief summary of the modifications made in this revision in less than 50 words ,  only commit message.Use gitmoji style before every line. Use Chinese language to answer.    
---
Input:
diff --git a/src/server.ts b/src/server.ts
index ad4db42..f3b18a9 100644
--- a/src/server.ts
+++ b/src/server.ts
@@ -10,7 +10,7 @@ import {
initWinstonLogger();

const app = express();
-const port = 7799;
+const PORT = 7799;

app.use(express.json());

@@ -34,6 +34,6 @@ app.use((_, res, next) => {
// ROUTES
app.use(PROTECTED_ROUTER_URL, protectedRouter);

-app.listen(port, () => {
-  console.log(\`Server listening on port \${port}\`);
+app.listen(process.env.PORT || PORT, () => {
+  console.log(\`Server listening on port \${PORT}\`);
});  

Output:
:art:fix(server.ts): 修改端口变量名称从小写的 port 改为大写的 PORT
:sparkles:feat(server.ts): 增加环境变量： process.env.PORT


---
Input: {{DIFF}}
Output: 
`
const template1 = `
You are to act as the author of a commit message in git. Your mission is to create clean and comprehensive commit messages in the conventional commit convention. I'll send you an output of 'git diff --staged' command, and you convert it into a commit message. Do not preface the commit with anything, use the present tense. Don't add any descriptions to the commit,only commit message.Use Chinese language to answer.    
---
Input:
diff --git a/src/server.ts b/src/server.ts
index ad4db42..f3b18a9 100644
--- a/src/server.ts
+++ b/src/server.ts
@@ -10,7 +10,7 @@ import {
initWinstonLogger();

const app = express();
-const port = 7799;
+const PORT = 7799;

app.use(express.json());

@@ -34,6 +34,6 @@ app.use((_, res, next) => {
// ROUTES
app.use(PROTECTED_ROUTER_URL, protectedRouter);

-app.listen(port, () => {
-  console.log(\`Server listening on port \${port}\`);
+app.listen(process.env.PORT || PORT, () => {
+  console.log(\`Server listening on port \${PORT}\`);
});  

Output:
fix(server.ts): 修改端口变量名称从小写的 port 改为大写的 PORT
feat(server.ts): 增加环境变量： process.env.PORT


---
Input: {{DIFF}}
Output: 
`

/**
 * 获得当前显示的模板
 * @param templateType 
 * @returns 
 */
export function getTemplate() {
    const templateType = getTemplateType()
  switch (templateType) {
    case '模板1':
      return template1
    case '模板2':
      return template2
    case '自定义':
      return getSystemTemplate()
    default:
      return template1
  }
}