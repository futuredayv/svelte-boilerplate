import TodoItem from './index.svelte';
import { render } from '@testing-library/svelte';

describe('Components', () => {
	describe('TodoItem', () => {
		xit('renders without failing', () => {
	
			const todo = {
				name: 'Run Tests',
				status: false,
			};
			
			const { container } = render(<TodoItem todo={todo}></TodoItem>)
	
			expect(container.querySelector('.todo-item').length).toBeTruthy();
			expect(container).toMatchSnapshot()
		});
	})
});