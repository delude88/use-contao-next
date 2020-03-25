import Link from "next/link";
import {Button} from "baseui/button";
import {GetStaticProps} from "next";
import {useStaticProps} from "use-contao";


const server = "https://contao.v22019048220387295.hotsrv.de";

const StaticPage = ({contao}) => {
    return (
        <div>
            <h1>Another SSR usage of Contao API</h1>
            {contao && contao.sitemap && (
                <h1>{contao.sitemap.title}</h1>
            )}
            <p>
                <Link href="/ssr">
                    <Button>
                        Navigate to page before
                    </Button>
                </Link>
            </p>
            <p>
                <Link href="/">
                    <Button>Back to overview</Button>
                </Link>
            </p>
        </div>
    );
};
export const getStaticProps: GetStaticProps = useStaticProps(server);

export default StaticPage;