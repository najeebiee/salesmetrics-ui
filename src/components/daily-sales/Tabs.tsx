"use client";

type TabItem = {
  id: string;
  label: string;
};

type TabsProps = {
  items: TabItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
};

export function Tabs({ items, activeTab, onTabChange }: TabsProps) {
  return (
    <div className="w-full max-w-full overflow-x-auto">
      <div className="flex min-w-max items-center gap-1.5 whitespace-nowrap">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`h-8 rounded-md px-3 text-sm font-medium transition-colors ${
              activeTab === item.id ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100"
            }`}
            onClick={() => onTabChange(item.id)}
            aria-pressed={activeTab === item.id}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
