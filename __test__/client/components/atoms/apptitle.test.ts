import { shallowMount } from "@vue/test-utils";
import AppTitle from "@client/components/atoms/AppTitle.vue";

describe("AppTitle.vue", () => {
    test("renders props.msg when passed", () => {
        const wrapper = shallowMount(AppTitle, {
            slots: { default: "test" },
        });
        expect(wrapper).toMatchSnapshot();
    });
});
