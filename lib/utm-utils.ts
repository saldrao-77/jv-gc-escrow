"use client"

export function getUtmParams() {
  if (typeof window === "undefined") {
    return {
      utmSource: "",
      utmMedium: "",
      utmCampaign: "",
    }
  }

  const urlParams = new URLSearchParams(window.location.search)

  return {
    utmSource: urlParams.get("utm_source") || "",
    utmMedium: urlParams.get("utm_medium") || "",
    utmCampaign: urlParams.get("utm_campaign") || "",
  }
}

// Enhance the getUserDeviceInfo function with more comprehensive mobile detection
export function getUserDeviceInfo() {
  if (typeof window === "undefined") {
    return {
      isMobile: false,
      userAgent: "",
    }
  }

  const userAgent = window.navigator.userAgent
  // More comprehensive mobile detection pattern
  const isMobile = /mobile|android|iphone|ipad|ipod|tablet|phone|touch/i.test(userAgent.toLowerCase())

  return {
    isMobile,
    userAgent,
  }
}
