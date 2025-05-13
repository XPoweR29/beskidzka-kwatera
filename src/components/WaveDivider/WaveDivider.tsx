'use client';
import React from 'react';
import styles from './WaveDivider.module.scss';
import Wave from 'react-wavify';
import { useBreakpoints } from '@/hooks/useBreakpoint';

interface Props {
  positionTop?: boolean
  color?: string 
}

export const WaveDivider = ({ positionTop, color='white' }: Props) => {
	const { breakpoint } = useBreakpoints();

	return (
		<div
			className={`${styles.waveContainer} ${
				positionTop ? styles['waveContainer--top'] : ''
			}`}>
			<Wave
				fill={color}
				className={`${styles.wave} ${styles['wave--1']}`}
				paused={false}
				options={{
					height: 70,
					amplitude: !breakpoint.md ? 25 : 30,
					speed: 0.2,
					points: !breakpoint.md ? 2 : 4,
				}}
			/>

			<Wave
				fill={color}
				className={`${styles.wave} ${styles['wave--2']}`}
				paused={false}
				options={{
					height: 70,
					amplitude: !breakpoint.md ? 20 : 25,
					speed: 0.15,
					points: !breakpoint.md ? 3 : 5,
				}}
			/>
		</div>
	);
};
