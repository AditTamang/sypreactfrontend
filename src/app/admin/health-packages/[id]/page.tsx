import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save } from "lucide-react"

export default function HealthPackageEditPage({ params }: { params: { id: string } }) {
  const isNewPackage = params.id === "new"

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/admin/health-packages">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {isNewPackage ? "Add New Health Package" : "Edit Health Package"}
          </h1>
          <p className="text-muted-foreground">
            {isNewPackage ? "Create a new health package" : "Update health package details"}
          </p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Package Information</CardTitle>
          <CardDescription>Enter the health package details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" placeholder="Enter package title" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="originalPrice">Original Price</Label>
              <Input id="originalPrice" type="number" placeholder="0.00" step="0.01" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="discountedPrice">Discounted Price</Label>
              <Input id="discountedPrice" type="number" placeholder="0.00" step="0.01" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" placeholder="Enter package description" className="min-h-[120px]" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="features">Features</Label>
            <Textarea id="features" placeholder="Enter package features (one per line)" className="min-h-[120px]" />
            <p className="text-sm text-muted-foreground">Enter each feature on a new line</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="image">Image URL</Label>
            <Input id="image" placeholder="Enter image URL" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin/health-packages">Cancel</Link>
          </Button>
          <Button>
            <Save className="mr-2 h-4 w-4" />
            Save Package
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

