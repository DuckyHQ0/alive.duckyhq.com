import { getCollection } from "astro:content";
import { ListItem, ListItemCollapsible } from "./ListItem";

const docs = await getCollection("docs");

function findChildren(items, parentSlug) {
  return items.filter((item) => {
    return parentSlug === item.slug.split("/").slice(0, -1).join("/");
  });
}

function renderItems(items, parentSlug, currentSlug) {
  const children = findChildren(items, parentSlug);

  return (
    <ul>
      {children.map((item) => {
        const isDescendant = currentSlug.startsWith(`/docs/${item.slug}`);

        const isSelected = `/docs/${item.slug}` === currentSlug;
        const isOpen = isSelected || isDescendant;

        return (
          <li key={item.slug}>
            {item.data.directory ? (
              <ListItemCollapsible
                text={item.data.title}
                slug={`/docs/${item.slug}`}
                defaultOpen={isOpen}
                selected={isSelected}
              >
                {renderItems(items, item.slug, currentSlug)}
              </ListItemCollapsible>
            ) : (
              <ListItem
                selected={isSelected}
                text={item.data.title}
                slug={`/docs/${item.slug}`}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar({ currentSlug }) {
  return (
    <div className="p-24 flex flex-col gap-12 bg-fg-1 w-[35%] border border-stroke-1 rounded-out">
      <h3 className="h3">Contents</h3>
      {renderItems(docs, "", currentSlug)}
    </div>
  );
}
