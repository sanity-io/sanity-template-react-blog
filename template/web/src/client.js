import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "<#< sanity.projectId >#>", // find this at manage.sanity.io, run `sanity init` to initialize
  dataset: "<#< sanity.dataset >#>", // this is from when we answered those question from 'sanity init'
  useCdn: true,
});
