/**
 * Briefloom API — Server-Side Financial & Milestone Calculation Service
 */
function calculateProposalTotals(project) {
  const deliverables = Array.isArray(project.deliverables) ? project.deliverables : [];
  let fixedSubtotal = 0;
  let hourlySubtotal = 0;
  let addonsSubtotal = 0;
  let totalHours = 0;
  let includedCount = 0;

  for (const item of deliverables) {
    const hours = Math.max(0, Number(item.hours || 0));
    const rate = Math.max(0, Number(item.rate || 0));
    const fixed = Math.max(0, Number(item.fixedPrice || 0));
    const lineAmount = item.mode === 'hourly' ? hours * rate : fixed;

    if (item.optional) {
      if (item.included) {
        addonsSubtotal += lineAmount;
        totalHours += hours;
        includedCount += 1;
      }
    } else {
      includedCount += 1;
      totalHours += hours;
      if (item.mode === 'hourly') hourlySubtotal += lineAmount;
      else fixedSubtotal += lineAmount;
    }
  }

  const netSubtotal = fixedSubtotal + hourlySubtotal + addonsSubtotal;
  const contingencyPct = Math.max(0, Number(project.contingencyPct || 0));
  const discountPct = Math.max(0, Number(project.discountPct || 0));
  const taxPct = Math.max(0, Number(project.taxPct || 0));

  const contingencyAmount = Math.round(netSubtotal * (contingencyPct / 100));
  const discountAmount = Math.round(netSubtotal * (discountPct / 100));
  const taxableBase = Math.max(0, netSubtotal + contingencyAmount - discountAmount);
  const taxAmount = Math.round(taxableBase * (taxPct / 100));
  const grandTotal = taxableBase + taxAmount;

  const milestones = Array.isArray(project.milestones) ? project.milestones : [];
  const milestoneSchedule = milestones.map((m) => ({
    ...m,
    amount: Math.round(grandTotal * (Math.max(0, Number(m.pct || 0)) / 100))
  }));

  return {
    fixedSubtotal,
    hourlySubtotal,
    addonsSubtotal,
    netSubtotal,
    contingencyAmount,
    discountAmount,
    taxableBase,
    taxAmount,
    grandTotal,
    totalHours,
    includedCount,
    milestoneSchedule
  };
}

module.exports = { calculateProposalTotals };
