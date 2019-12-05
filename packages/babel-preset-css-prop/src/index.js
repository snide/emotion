import jsx from '@babel/plugin-transform-react-jsx'
import pragmatic from '@emotion/babel-plugin-jsx-pragmatic'
import emotion from '@emotion/babel-plugin'

let pragmaName = '___EmotionJSX'

// pull out the emotion options and pass everything else to the jsx transformer
// this means if @babel/plugin-transform-react-jsx adds more options, it'll just work
// and if babel-plugin-emotion adds more options we can add them since this lives in
// the same repo as babel-plugin-emotion

export default (
  api,
  { pragma, sourceMap, autoLabel, labelFormat, importMap, ...options } = {}
) => {
  return {
    plugins: [
      [
        pragmatic,
        {
          export: 'jsx',
          module: '@emotion/core',
          import: pragmaName
        }
      ],
      [jsx, { pragma: pragmaName, pragmaFrag: 'React.Fragment', ...options }],
      [
        emotion,
        {
          sourceMap,
          autoLabel,
          labelFormat,
          cssPropOptimization: true,
          importMap
        }
      ]
    ]
  }
}
