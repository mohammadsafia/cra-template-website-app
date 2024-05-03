type DemoProps = {
	title: string
}
function Demo({title }: DemoProps) {
	return <div>Title: {title}</div>
}
export default Demo;