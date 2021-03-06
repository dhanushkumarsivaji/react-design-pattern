import { RecursiveComponent } from "./components/recursive";
import { DangerButton, BigSuccessButton } from './components/partiallyApply';

const nestedObject = {
	a: 1,
	b: {
		b1: 4,
		b2: {
			b23: 'Hello',
		},
		b3: {
			b31: {
				message: 'Hi',
			},
			b32: {
				message: 'Hi',
			}
		}
	},
	c: {
		c1: 2,
		c2: 3,
	}
}

function FunctionalProgrammingReact() {
	return (
		<>
		<DangerButton text="Don't do it!" />
		<BigSuccessButton text="Yes!!!" />
		</>
	);
}

export default FunctionalProgrammingReact;
