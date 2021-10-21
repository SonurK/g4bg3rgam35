// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { GeneralItemBoxComponent } from './general-item-box.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Shared/GeneralItemBoxComponent',
  component: GeneralItemBoxComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<GeneralItemBoxComponent> = (args: GeneralItemBoxComponent) => ({
  props: args,
});

export const Default = Template.bind({});

Default.args = {
  itemImageUrl: 'https://www.foromarketing.com/wp-content/uploads/2018/03/La-moda-l%C3%ADquida.png',
  itemText: '',
  itemType: 'default',
  itemBoxColor: 'green',
};

export const DefaultWithTitle = Template.bind({});

DefaultWithTitle.args = {
  itemImageUrl: 'https://media.istockphoto.com/vectors/sports-set-of-athletes-of-various-sports-disciplines-isolated-vector-vector-id1141191007?k=20&m=1141191007&s=612x612&w=0&h=CXC28y_ZRV1KvjISumj5w20bYn649HVi4yYTPWsKaZI=',
  itemText: 'Deporte',
  itemType: 'default',
  itemBoxColor: 'green',
};

export const DefaultWithTopTitle = Template.bind({});

DefaultWithTopTitle.args = {
  itemImageUrl: 'https://media.npr.org/assets/img/2020/06/10/gettyimages-200199027-001-b5fb3d8d8469ab744d9e97706fa67bc5c0e4fa40.jpg',
  itemText: 'Deporte',
  itemType: 'default',
  itemBoxColor: 'green',
  itemBoxOrientation: 'top',
};

export const DefaultWithNoImage = Template.bind({});

DefaultWithTitle.args = {
  itemText: 'Deporte',
  itemType: 'default',
  itemBoxColor: 'green',
};

export const Small = Template.bind({});

Small.args = {
  itemImageUrl: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293__340.jpg',
  itemText: '',
  itemType: 'small',
  itemBoxColor: 'green',
};

export const SmallWithTitle = Template.bind({});

SmallWithTitle.args = {
  itemImageUrl: 'https://www.wsclegal.com/wp-content/uploads/2020/12/tierra-mallorca-rgJ1J8SDEAY-unsplash-scaled.jpg',
  itemText: 'Inmuebles',
  itemType: 'small',
  itemBoxColor: 'purple',
};

export const SmallWithTopTitle = Template.bind({});

SmallWithTopTitle.args = {
  itemImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnaGdjLeb9bX1N7yef-b7cbbquEXfWjD5WGg&usqp=CAU',
  itemText: 'Inmuebles',
  itemType: 'small',
  itemBoxColor: 'green',
  itemBoxOrientation: 'top',
};

export const Big = Template.bind({});

Big.args = {
  itemImageUrl: 'https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2017/11/technology-banner.jpg',
  itemText: '',
  itemType: 'big',
  itemBoxColor: 'purple',
};

export const BigWithTopTitle = Template.bind({});

BigWithTopTitle.args = {
  itemImageUrl: 'https://computacioninteractiva.com/wp-content/uploads/2019/07/INVERTIR-EN-TECNOLOGIA.png',
  itemText: 'Tecnologia',
  itemType: 'big',
  itemBoxColor: 'purple',
  itemBoxOrientation: 'top',
};
