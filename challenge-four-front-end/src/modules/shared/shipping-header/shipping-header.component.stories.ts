// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ShippingHeaderComponent } from './shipping-header.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Shared/ShippingHeaderComponent',
  component: ShippingHeaderComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ShippingHeaderComponent> = (args: ShippingHeaderComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  step: 1,
};
