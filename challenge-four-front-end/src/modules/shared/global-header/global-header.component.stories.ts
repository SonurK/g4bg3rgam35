// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { GlobalHeaderComponent } from './global-header.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Global/HeaderComponent',
  component: GlobalHeaderComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<GlobalHeaderComponent> = (args: GlobalHeaderComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {
  profileImageUrl: 'https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320086059654790795.png',
  profileUserName: 'Carlos',
};
