# aws-node-http-api-typescript-example
serverlessのサンプルプロジェクトです。

### 初期セットアップ
* serverlessに[exmapleプロジェクト](https://github.com/serverless/examples)が公開されているので、今回は[typescript](https://github.com/serverless/examples/tree/v3/aws-node-http-api-typescript)のサンプルプロジェクトをテンプレートに指定する。
```shell
$ sls create --template-url https://github.com/serverless/examples/tree/v3/aws-node-http-api-typescript --path app
```
* ローカル実行できるようにserverless-offlineをインストール
```shell
$ cd app
$ npm i -D serverless-offline
```
* `serverless.yml`の`plugins`に追加
```yaml
plugins:
  - serverless-plugin-typescript
+ - serverless-offline
```
* 以下のコマンドでローカル起動が可能となる。
```shell
$ sls offline
```
* npmでインストールした際にバージョンが古いものが(9.x)がインストールされた
* serverless plugin installでインストールすると12.xがインストールされる。
  ```shell
  $ sls plugin install --name serverless-offline
  ```
