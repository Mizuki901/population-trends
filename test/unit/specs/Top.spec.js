import { mount } from '@vue/test-utils'
import Top from '@/components/pages/Top'

describe('Top.vue', () => {
  it('should render correct contents', () => {
  expect(mount(Top).find('.top h1').text())
      .toEqual('都道府県別人口推移')
  })
})
