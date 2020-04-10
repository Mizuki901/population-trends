import { mount } from '@vue/test-utils'
import Toolbar from '@/components/organisms/Toolbar'

describe('Toolbar.vue', () => {
    it('Titleが設定されていること', () => {
        // 1文字以上の文字列かの判定
        const regexp = new RegExp(/.+/)
        const title = mount(Toolbar).find('.title').text()
        expect(regexp.test(title)).toBe(true);
    })
})