import { mount } from '@vue/test-utils'
import Toolbar from '@/components/common/Toolbar'

describe('Toolbar.vue', () => {
    it('titleが設定されていること', () => {
        const regexp = new RegExp(/.+/)
        const title = mount(Toolbar).find('.title').text()
        // titleが1文字以上の文字列かの判定
        expect(regexp.test(title)).toBe(true);
    })
})