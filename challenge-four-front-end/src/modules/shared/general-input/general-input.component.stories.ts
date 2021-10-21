// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { GeneralInputComponent } from './general-input.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Shared/GeneralInputComponent',
  component: GeneralInputComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<GeneralInputComponent> = (args: GeneralInputComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  inputTitle: 'Busqueda',
  inputType: 'principal',
};

export const Secondary = Template.bind({});

Secondary.args = {
  inputTitle: 'Busqueda',
  inputType: 'small',
};
