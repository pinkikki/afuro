import React from 'react'
import styles from './Layout.module.scss'

interface AuxProps {
  children: React.ReactNode,
  options?: Options
}

interface ContainerProps extends AuxProps {
  direction: Direction
  containerOptions?: ContainerOptions
}

interface ContainerOptions {
  rowOutsidePadding: boolean,
  columnOutsidePadding: boolean
  justifyContent?: JustifyContent
}

interface Options {
  justifyContent?: JustifyContent
  width?: Width
}


export enum Direction {
  row,
  column
}

export enum JustifyContent {
  start = 'start',
  end = 'end',
  flexStart = 'flex-start',
  flexEnd = 'flex-end',
  center = 'center',
  left = 'left',
  right = 'right'
}

export enum Width {
  auto = 'auto',
  fullWidth = 'full-width'
}

const Container = (props: ContainerProps) => {
  const direction = props.direction == Direction.row ? styles.row : styles.column;
  const rowOutsidePadding = props.containerOptions == null ? styles['row-outside-padding'] : props.containerOptions.rowOutsidePadding ? styles['row-outside-padding'] : '';
  const columnOutsidePadding = props.containerOptions == null ? styles['column-outside-padding'] : props.containerOptions.columnOutsidePadding ? styles['column-outside-padding'] : '';
  const justifyContent = props.options == null ? styles['flex-start'] : props.options.justifyContent == null ? styles['flex-start'] : styles[props.options.justifyContent];
  const width = props.options == null ? styles['full-width'] : props.options.width == null ? styles['full-width'] : styles[props.options.width];

  return (
    <div className={`${styles.container} ${direction} ${rowOutsidePadding} ${columnOutsidePadding} ${justifyContent} ${width}`}>
      {props.children}
    </div>
  );
};

export const Row = (props: AuxProps) => {
  return (
    <Container direction={Direction.row} containerOptions={{rowOutsidePadding: false, columnOutsidePadding: false}}
               options={props.options}>
      {props.children}
    </Container>
  )
};

export const Column = (props: AuxProps) => {
  return (
    <Container direction={Direction.column} containerOptions={{rowOutsidePadding: false, columnOutsidePadding: false}}
               options={props.options}>
      {props.children}
    </Container>
  )
};

export default Container;