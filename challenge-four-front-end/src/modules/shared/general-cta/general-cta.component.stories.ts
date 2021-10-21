// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { GeneralCtaComponent } from './general-cta.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Shared/GeneralCtaComponent',
  component: GeneralCtaComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<GeneralCtaComponent> = (args: GeneralCtaComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  buttonTitle: 'Primary',
  buttonType: 'primary',
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  buttonTitle: 'Primary',
  buttonType: 'default',
};

export const Secondary = Template.bind({});

Secondary.args = {
  buttonTitle: 'Secondary',
  buttonType: 'secondary',
};
