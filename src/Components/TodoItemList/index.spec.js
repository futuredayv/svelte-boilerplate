import TodoItemList from './index.svelte';
import { render } from '@testing-library/svelte'

describe('Sample', () => {
	xit('renders without failing', () => {
		const { container, getAllByText } = render(TodoItemList)

		expect(getAllByText('Hello World!').length).toBe(1)
		expect(container).toMatchSnapshot()
	});
});