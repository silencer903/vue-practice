import { shallowMount } from '@vue/test-utils'
import Contact from '@/views/contact/contact.vue'

describe('contact.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = '';
        const wrapper = shallowMount(Contact, {
            propsData: { msg }
        });
        let form = wrapper.find('form');
        let button = wrapper.find('button');
        let nameInput = wrapper.find('.nameInput');

        expect(form.contains('form')).toBe(true);
        expect(form.attributes().method).toBe('post');
        nameInput.value = 'a';
        expect(nameInput.value).toBe('a');
    })
});
