# aws-node-http-api-typescript-example
## serverlessのサンプルプロジェクトです。

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

### デフォルトIAMロール
* デフォルトでは1つのIAMロールがserverlessに定義したLambda関数によって共有される。デフォルトではLambda関数にはCloudWatchログを作成して書き込む権限が付与されている。
* 関数内からSDKを使ってS3にアクセス等したい場合は以下のような形でIAMロールにポリシーをアタッチする
  ```yaml
  provider:
    iam:
      role:
        statements:
          - Effect: Allow
            Action:
            - "s3:GetObject"
            Resource: "arn:aws:s3:::bucketName/*"
  ```

### コマンド一覧
* デプロイ
  ```shell
  $ sls deploy
  ```
* 削除
  ```shell
  $ sls remove 
  ```
