import Link from "next/link";
import {Button} from "baseui/button";
import {useContao} from "use-contao";

export default () => {
    const contao = useContao({sitemap: true});

    return (
        <>
            <h1>Dynamic and Context API usage of Contao API</h1>
            {contao && contao.sitemap && (
                <>
                    <h1>{contao.sitemap.title}</h1>
                    <p>
                        {contao.sitemap.description}
                    </p>
                </>
            )}
            <p>
                <Link href="/csr/context/another">
                    <Button>
                        Navigate to another page
                    </Button>
                </Link>
            </p>
            <p>
                <Link href="/">
                    <Button>Back to overview</Button>
                </Link>
            </p>
        </>
    )
};
