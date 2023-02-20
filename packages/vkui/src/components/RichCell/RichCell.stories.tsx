import React from 'react';
import { Meta, Story } from '@storybook/react';
import { withSinglePanel, withVKUILayout } from '../../storybook/VKUIDecorators';
import { CanvasFullLayout, DisableCartesianParam } from '../../storybook/constants';
import { Avatar } from '../Avatar/Avatar';
import { Group } from '../Group/Group';
import { RichCell, RichCellProps } from './RichCell';

const story: Meta<RichCellProps> = {
  title: 'Blocks/RichCell',
  component: RichCell,
  parameters: { ...CanvasFullLayout, ...DisableCartesianParam },
};

export default story;

const Template: Story<RichCellProps> = (args) => <RichCell {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  before: (
    <Avatar
      size={72}
      src="https://sun9-29.userapi.com/c623616/v623616034/1c184/MnbEYczHxSY.jpg?ava=1"
    />
  ),
  subhead: 'Subhead',
  text: 'Text',
  caption: 'Caption',
  after: 'After',
  afterCaption: 'After Caption',
  children: 'Example',
};
Playground.decorators = [
  (Component, context) => (
    <Group>
      <Component {...context.args} />
    </Group>
  ),
  withSinglePanel,
  withVKUILayout,
];
