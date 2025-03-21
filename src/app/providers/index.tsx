import Layout from '@/widgets/layout'

const Providers = (
	props: Readonly<{
		children: React.ReactNode
	}>
) => {
	return <Layout>{props.children}</Layout>
}

export default Providers
