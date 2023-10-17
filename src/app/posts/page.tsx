import { Button, ConfigProvider } from "antd"
import theme from "../theme/themeConfig"

export default function Post (props: any){
    return(
        <ConfigProvider theme={theme}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>
            <div>
            <Button type="primary">Button</Button>
            </div>
            Post
        </div>
        </main>
        </ConfigProvider>
    )
}