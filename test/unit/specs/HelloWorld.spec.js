import { mount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
  expect(mount(HelloWorld).find('.hello h1').text())
      .toEqual('This App is Deployed by CI/CD')
  })
})
