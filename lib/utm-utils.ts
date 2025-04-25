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

export function getUserDeviceInfo() {
  if (typeof window === "undefined") {
    return {
      isMobile: false,
      userAgent: "",
    }
  }

  const userAgent = window.navigator.userAgent
  const isMobile = /mobile|android|iphone|ipad|ipod/i.test(userAgent.toLowerCase())

  return {
    isMobile,
    userAgent,
  }
}
