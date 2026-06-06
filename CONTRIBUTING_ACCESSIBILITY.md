# Accessibility Contribution Guidelines

This document outlines how to ensure your contributions maintain and improve the accessibility of the M'goun Geopark mobile app.

## Overview

The M'goun Geopark app is committed to WCAG 2.1 Level AA compliance and Apple/Google accessibility guidelines. All contributions must maintain or improve accessibility standards.

## Before You Start

1. Read [WCAG 2.1 Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
2. Review [Apple Human Interface Guidelines - Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)
3. Review [Google Material Design - Accessibility](https://material.io/design/usability/accessibility.html)
4. Check existing accessibility tests in `lib/__tests__/`

## Contribution Checklist

### For All Changes

- [ ] Code passes TypeScript check (`pnpm check`)
- [ ] All tests pass (`pnpm test`)
- [ ] Accessibility validation passes (`pnpm validate:accessibility`)
- [ ] No console errors or warnings in development

### For UI/Component Changes

- [ ] **Contrast**: Text has 4.5:1 contrast ratio (AA) or 7:1 (AAA)
  - Test: Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
  - Automated: `pnpm test -- contrast-validation.test.ts`

- [ ] **Touch Targets**: Interactive elements are ≥44×44 pt
  - Automated: `pnpm test -- touch-target-size.test.ts`

- [ ] **Icons**: Icons have 3:1 contrast ratio
  - Automated: `pnpm test -- icon-contrast.test.ts`

- [ ] **Spacing**: 8-12 pt minimum between interactive elements

### For Animation/Transition Changes

- [ ] **prefers-reduced-motion**: Animations respect user preferences
  - Use: `const prefersReducedMotion = useReducedMotion();`
  - Set duration to 0 when `prefersReducedMotion` is true
  - Automated: `pnpm test -- reduced-motion.test.ts`

- [ ] **Duration**: Animations are ≤500ms
  - Faster is better for accessibility

- [ ] **No decorative animations**: Only animate meaningful interactions

### For Text/Content Changes

- [ ] **Font Size**: Body text is ≥12pt
- [ ] **Line Height**: 1.2-1.5× font size
- [ ] **Color**: Not the only indicator (use icons/text)
- [ ] **Language**: Clear, simple, and multilingual (FR/EN/AR)

### For Navigation/Interaction Changes

- [ ] **All buttons work**: No dead ends or broken flows
- [ ] **Focus indicators**: Visible on web (keyboard navigation)
- [ ] **Screen reader**: Announces elements correctly
- [ ] **Haptics**: Used sparingly for feedback (iOS/Android)

## Implementation Examples

### Using useReducedMotion Hook

```tsx
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function MyComponent() {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      // Instant change
      setValue(finalValue);
    } else {
      // Animate
      Animated.timing(anim, {
        toValue: finalValue,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [prefersReducedMotion]);

  return <Animated.View style={{ opacity: anim }} />;
}
```

### Ensuring Sufficient Contrast

```tsx
import { useColors } from "@/hooks/use-colors";

export function MyComponent() {
  const colors = useColors();

  return (
    <View style={{ backgroundColor: colors.background }}>
      {/* Use theme colors for automatic contrast */}
      <Text style={{ color: colors.foreground }}>
        This text has sufficient contrast
      </Text>
    </View>
  );
}
```

### Creating Accessible Touch Targets

```tsx
export function MyButton() {
  return (
    <Pressable
      style={({ pressed }) => [
        {
          minWidth: 44,
          minHeight: 44,
          paddingHorizontal: 16,
          paddingVertical: 12,
          opacity: pressed ? 0.7 : 1,
        },
      ]}
      onPress={handlePress}
    >
      <Text>Tap me</Text>
    </Pressable>
  );
}
```

## Testing Your Changes

### Run All Accessibility Tests

```bash
pnpm test
```

### Run Specific Test Suite

```bash
# Contrast validation
pnpm test -- contrast-validation.test.ts

# Light mode contrast
pnpm test -- contrast-light-mode.test.ts

# Touch target size
pnpm test -- touch-target-size.test.ts

# Icon contrast
pnpm test -- icon-contrast.test.ts

# Reduced motion
pnpm test -- reduced-motion.test.ts

# Animation integration
pnpm test -- animations-integration.test.ts
```

### Validate Full Accessibility

```bash
pnpm validate:accessibility
```

### Manual Testing on Devices

See [TESTING_GUIDE.md](./docs/TESTING_GUIDE.md) for step-by-step instructions:

- **iOS**: Enable Reduce Motion in Settings → Accessibility → Motion
- **Android**: Enable Remove animations in Settings → Accessibility → Display
- **Web**: Use DevTools to emulate `prefers-reduced-motion`

## Common Accessibility Issues

### Issue: Text Not Readable in Dark Mode

**Solution**: Use theme colors instead of hardcoded colors

```tsx
// ❌ Bad
<Text style={{ color: "#888" }}>Text</Text>

// ✅ Good
const colors = useColors();
<Text style={{ color: colors.muted }}>Text</Text>
```

### Issue: Animation Plays Despite prefers-reduced-motion

**Solution**: Check `useReducedMotion()` before animating

```tsx
// ❌ Bad
Animated.timing(anim, { duration: 300 }).start();

// ✅ Good
const prefersReducedMotion = useReducedMotion();
const duration = prefersReducedMotion ? 0 : 300;
Animated.timing(anim, { duration }).start();
```

### Issue: Small Touch Target

**Solution**: Ensure minimum 44×44 pt size

```tsx
// ❌ Bad
<Pressable style={{ width: 30, height: 30 }} />

// ✅ Good
<Pressable style={{ minWidth: 44, minHeight: 44 }} />
```

### Issue: Icon Without Text

**Solution**: Add accessible text label

```tsx
// ❌ Bad
<IconSymbol name="house.fill" size={24} color={color} />

// ✅ Good
<View accessible accessibilityLabel="Home">
  <IconSymbol name="house.fill" size={24} color={color} />
</View>
```

## Pull Request Process

1. **Create a branch**: `feature/your-feature`
2. **Make changes**: Follow the checklist above
3. **Run tests**: `pnpm test && pnpm validate:accessibility`
4. **Commit**: Use clear commit messages
5. **Push**: `git push origin feature/your-feature`
6. **Create PR**: Include accessibility notes in description
7. **Wait for CI**: GitHub Actions will validate accessibility
8. **Address feedback**: Make requested changes
9. **Merge**: Once approved and all checks pass

## Accessibility PR Template

```markdown
## Description
Brief description of changes

## Accessibility Impact
- [ ] No accessibility impact
- [ ] Improves accessibility
- [ ] Maintains current accessibility level

## Changes Made
- List specific accessibility improvements or considerations

## Testing
- [ ] Tested on iOS with Reduce Motion enabled
- [ ] Tested on Android with Remove animations enabled
- [ ] Tested on web with DevTools emulation
- [ ] All tests pass: `pnpm test`
- [ ] Validation passes: `pnpm validate:accessibility`

## Screenshots/Videos
(Optional) Add screenshots or videos demonstrating accessibility features
```

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Apple HIG - Accessibility](https://developer.apple.com/design/human-interface-guidelines/accessibility)
- [Google Material Design - Accessibility](https://material.io/design/usability/accessibility.html)
- [MDN - Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM - Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [React Native Accessibility](https://reactnative.dev/docs/accessibility)

## Questions?

If you have questions about accessibility requirements or implementation, please:

1. Check existing tests and documentation
2. Open an issue with the `accessibility` label
3. Contact the development team

## Thank You!

Thank you for helping make the M'goun Geopark app accessible to everyone! 🎉
