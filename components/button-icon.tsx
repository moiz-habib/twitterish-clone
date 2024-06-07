import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "@/components/ui/button"

export function ButtonWithIcon() {
  return (
    <Button type="submit">
      <FaXTwitter className="mr-2 h-4 w-4" /> Tweet
    </Button>
  )
}
