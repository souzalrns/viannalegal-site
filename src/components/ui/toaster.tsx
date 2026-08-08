import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      {/* Sem className de posição customizada — usa o default do ToastViewport
          (topo no mobile, canto inferior direito no desktop), que já vem
          com as animações certas (desliza a partir da borda). A versão
          anterior sobrepunha isso com posição fixa no centro do ecrã,
          quebrando a animação de entrada e tapando conteúdo por baixo. */}
      <ToastViewport />
    </ToastProvider>
  );
}
