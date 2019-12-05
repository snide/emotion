// @flow
import babelTester from 'babel-tester'
import plugin from '@emotion/babel-plugin'

const cases = {
  'hash generation no file system': {
    code: 'import styled from "@emotion/styled";\nstyled.h1`color:blue;`',
    plugins: [plugin],
    babelFileName: undefined
  }
}

babelTester('styled inline', cases)
