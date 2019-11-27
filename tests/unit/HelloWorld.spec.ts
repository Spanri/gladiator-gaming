import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld2.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).to.include(msg);
  });

  it("renders props.msg when passed", done => {
    const wrapper = shallowMount(HelloWorld);
    wrapper.find('button').trigger('click');
    wrapper.vm.$nextTick(() => {
      // expect(wrapper.value.to.be('value');
      done();
    });
  });
});
