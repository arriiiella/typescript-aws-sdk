import {
  TranslateClient,
  TranslateTextCommand,
  TranslateTextCommandInput,
  TranslateTextCommandOutput,
} from "@aws-sdk/client-translate";

const client = new TranslateClient({
  region: "eu-west-1",
});

const translate = async (text: string) => {
  const params: TranslateTextCommandInput = {
    SourceLanguageCode: "en",
    TargetLanguageCode: "fr",
    Text: text,
  };

  const command = new TranslateTextCommand(params);

  const data: TranslateTextCommandOutput = await client.send(command);
  console.log(data);
};

translate("Hello World!");
translate("How are you?");
