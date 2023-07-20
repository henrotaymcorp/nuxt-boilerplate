import {
  useConfirm,
  useCurrentPath,
  useGenerator,
  useDisplayJson,
  usePackageStubsPath,
  usePrompt,
  useSentence,
} from "@henrotaym/scaffolding-utils";

const useStubsPath = usePackageStubsPath("@henrotaymcorp/nuxt-boilerplate");

const useScaffolding = () => {
  useSentence("Hi there 👋");
  useSentence("Let's scaffold a new nuxt project 🎉");

  const folder = usePrompt("Folder location [.]", ".");
  const location = useCurrentPath(folder);
  const lastFolderLocationName = location.split("/").slice(-1)[0];

  const organizationName = usePrompt(
    "Organization name [deegitalbe]",
    "deegitalbe"
  );

  const appKey = usePrompt(
    `App key [${lastFolderLocationName}]`,
    lastFolderLocationName
  );

  const description = usePrompt(
    `Project description [${lastFolderLocationName}]`,
    lastFolderLocationName
  );

  const authorName = usePrompt(
    "Author full name [Henrotay Mathieu]",
    "Henrotay Mathieu"
  );

  const authorEmail = usePrompt(
    "Author email [mathieu.henrotay@gmail.com]",
    "mathieu.henrotay@gmail.com"
  );

  const data = {
    organizationName,
    appKey,
    description,
    authorName,
    authorEmail,
  };

  useDisplayJson({ location, ...data });

  const isConfirmed = useConfirm("Is it correct ? ");

  if (!isConfirmed) {
    useSentence("Scaffolding was cancelled ❌");
    useSentence("Come back when you're ready 😎");
    return;
  }

  const generator = useGenerator(data);

  generator.copy(useStubsPath(), location);

  useSentence("Successfully scaffolded project ✅");
  useSentence("Next steps :");
  useSentence(
    `1. cd ${location} && npx @henrotaymcorp/nuxt-cloudflare-page-deployment@latest`
  );
  useSentence("2. Push your repository to git");
  useSentence("3. Wait for github action completion");
  useSentence("4. Bootstrap your project using docker-integration");
  useSentence("Happy coding 🤓");
};

export default useScaffolding;
