import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-100px)] space-y-16">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio!</h1>
        <p className="text-xl mb-8 max-w-2xl">
          I'm a full-stack developer and <span className="italic text-primary/80" /* TODO: link to explanation on /fivem? */>(used to be at least)</span> FiveM developer. I build web applications and FiveM resources
        </p>
        <Button asChild>
          <Link href="/projects">View My Projects</Link>
        </Button>
      </section>

      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Explore My Work</h2>
		<div className="flex flex-col space-y-8 md:flex-row md:space-x-8 md:space-y-0">
		  <Card>
			<CardHeader>
			  <CardTitle>Web Projects</CardTitle>
			  <CardDescription>Discover my latest projects and learn more about what i can do.</CardDescription>
			</CardHeader>
			<CardFooter>
			  <Button asChild variant="outline">
			<Link href="/projects">View Projects</Link>
			  </Button>
			</CardFooter>
		  </Card>
		  <Card>
			<CardHeader>
			  <CardTitle>FiveM Work</CardTitle>
			  <CardDescription>Explore my work on the FiveM platform and learn more about my projects.</CardDescription>
			</CardHeader>
			<CardFooter>
			  <Button asChild variant="outline">
			<Link href="/fivem">FiveM Projects</Link>
			  </Button>
			</CardFooter>
		  </Card>
		</div>
      </section>
    </div>
  )
}