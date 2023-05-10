const create = async ({
  request,
  factory,
  traits = [],
  nestedModels = {},
  attrs,
}) => {
  const data = await request.post("http://127.0.0.1:3001/factories", {
    data: { factory, traits, nested_models: nestedModels, attrs },
  });

  return data.json();
};

const clear = async ({ request }) => {
  await request.delete("http://127.0.0.1:3001/factories");
};

module.exports = { create, clear };
