export const onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions
}) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.(graphql|gql)$/,
          use: [{ loader: 'graphql-tag/loader' }],
          exclude: /node_modules/
        }
      ]
    }
  });
};
