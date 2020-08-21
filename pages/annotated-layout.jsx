import React from 'react'
import {
    Button, Card, Form, FormLayout, Layout, Page, SettingToggle, Stack, TextField, TextStyle
} from '@shopify/polaris'

class AnnotatedLayout extends React.Component  {
    state = {
        discount: '10%',
        enabled: false
    }

    handleChange = (field) => (value) => this.setState({ [field]: value })

    handleSubmit = () => {
        this.setState({ discount: this.state.discount })
        // eslint-disable-next-line no-console
        console.log('submission', this.state)
    }

    handleToggle = () => {
        this.setState(({ enabled }) => {
            return { enabled: !enabled }
        })
    }

    render() {

        const { discount, enabled } = this.state
        const contentStatus = enabled ? 'Disabled' : 'Enabled'
        const textStatus = enabled  ? 'enabled' : 'disabled'

        return (
            <Page>
                <Layout>
                <Layout.AnnotatedSection title="Discount discount" description="Add a product to Sample App, it will automatically be discounted">
                <Card sectioned>
                    <Form onSubmit={this.handleSubmit}>
                        <FormLayout>
                            <TextField
                                value={discount}
                                onChange={this.handleChange('discount')}
                                label="Discount percentage"
                                type="Discount"
                            />
                            <Stack distribution="trailing">
                                <Button primary submit>
                                    Save
                                </Button>
                            </Stack>
                        </FormLayout>
                    </Form>
                </Card>
            </Layout.AnnotatedSection>
            <Layout.AnnotatedSection title="Price updates" description="Temporarily disable all Sample App price updates">
                <SettingToggle action={{
                    content: contentStatus,
                    onAction: this.handleToggle,
                }}
                enabled={enabled}
                >
                    This setting is {''}
                    <TextStyle variation="strong">{textStatus}</TextStyle>
                </SettingToggle>
            </Layout.AnnotatedSection>
            </Layout>
        </Page>
        )
    }
}

export default AnnotatedLayout
