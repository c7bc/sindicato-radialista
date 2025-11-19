'use client';

import React, { useState } from "react";
import { NavButton } from "@/components/ui/nav";
import type { NavItem } from "@/types/payload";

interface HeaderProps {
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  { label: "INÍCIO", href: "/" },
  { label: "SINDICATO", href: "/sindicato" },
  { label: "JURÍDICO", href: "/juridico" },
  { label: "PUBLICAÇÕES", href: "/publicacoes" },
  { label: "SERVIÇOS", href: "/servicos" },
  { label: "NEWSLETTER", href: "/newsletter" },
  { label: "CONTATO", href: "/contato" },
];

export default function Header({ navItems = defaultNavItems }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Separate regular links from button items
  const linkItems = navItems.filter(item => !item.isButton);
  const buttonItems = navItems.filter(item => item.isButton);

  return (
    <header>
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a className="block text-brand-600 flex items-center gap-2" href="/">
              <svg width="60" height="45" viewBox="0 0 329 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M158.167 0.0849915L169.266 0C169.264 4.845 166.797 21.675 175.28 19.473C182.988 17.472 176.574 6.46299 179.43 2.24399C181.629 1.83299 184.665 3.384 186.732 4.276C198.564 9.385 204.693 19.748 208.148 31.576C202.457 31.131 181.282 28.804 186.847 39.379C188.505 42.527 205.112 41.201 208.96 41.316L208.928 51.624C204.193 51.464 190.303 50.309 187.911 52.947C177.839 64.053 206.702 61.188 209.025 61.155L209.013 71.138C204.157 71.088 179.463 68.331 187.804 79.358C189.695 81.858 205.338 81.003 208.938 80.759L208.89 92.902L171.735 92.897L118.241 92.622L118.112 81.095C122.722 81.067 140.381 83.017 141.122 77.207C141.305 75.657 140.756 74.11 139.636 73.022C136.385 69.805 123.908 71.236 118.472 71.157C118.531 67.905 118.419 64.477 118.361 61.21C122.04 61.095 136.661 61.79 137.885 60.699C151.053 48.964 121.24 51.6 118.402 51.647C118.507 48.148 118.406 44.857 118.312 41.362C121.698 41.301 137.475 42.168 139.07 40.127C147.685 29.112 124.234 31.26 119.268 31.305C124.01 13.967 131.565 7.076 148.344 1.056C148.213 4.187 147.62 16.231 149.548 17.899C160.635 27.5 158.256 4.16499 158.167 0.0849915Z" fill="#1379C3"/>
                <path d="M118.266 103.047C122.755 102.87 127.699 102.952 132.202 103.005C157.695 103.306 183.411 102.473 208.877 103.097C208.041 128.169 213.32 145.106 195.349 164.005C170.57 189.498 123.904 174.958 118.708 139.246C117.201 128.887 118.717 114.114 118.266 103.047Z" fill="#1379C3"/>
                <path d="M220.938 102.067C225.591 102.142 230.441 102.036 235.11 102.001C235.111 115.148 236.002 135.625 233.318 147.485C229.062 165.76 217.71 181.591 201.765 191.484C190.113 198.839 184.426 200.042 170.97 202.254C170.851 212.253 170.848 222.252 170.961 232.251C180.666 231.814 193.708 232.149 203.618 232.142L203.544 246.536L124 246.653C124.055 241.785 123.971 236.916 123.748 232.053L156.461 232.183C156.556 222.198 156.498 212.213 156.287 202.23C141.093 201.509 123.549 192.484 113.025 181.667C88.9602 156.933 92.5702 132.946 92.3972 102.116C97.0532 102.177 101.833 102.09 106.499 102.062C106.389 128.399 102.911 151.231 123.051 171.429C145.617 194.06 181.692 194.126 204.099 171.45C224.703 150.598 221.066 128.533 220.938 102.067Z" fill="#1379C3"/>
                <path d="M29.8432 36.9401C33.2712 39.0101 37.3402 43.9411 39.9492 46.9781C28.2602 62.8221 18.3522 79.7501 15.4932 99.6221C11.9092 124.529 15.5432 149.495 28.3622 171.422C32.3042 178.165 35.7652 182.184 40.2322 188.244C38.6202 190.199 35.5572 193.129 33.6662 195.032C32.4612 196.151 31.8132 197.022 30.2212 197.303C29.8182 197.083 28.9092 196.588 28.6052 196.237C-10.3358 151.322 -9.1278 81.0051 29.8432 36.9401Z" fill="#1379C3"/>
                <path d="M297.298 37.3781C305.079 39.8001 319.774 71.5371 322.21 78.8521C332.366 110.195 329.787 144.276 315.029 173.733C313.059 177.64 302.379 196.421 298.398 197.728C296.511 197.241 297.032 197.28 295.489 195.472C292.931 192.793 291.619 191.621 288.723 189.301C289.893 185.994 295.586 178.394 297.819 174.84C307.13 159.828 312.674 142.788 313.978 125.171C316.029 95.0731 307.092 69.7781 287.518 47.1761C290.756 44.2931 294.237 40.5291 297.298 37.3781Z" fill="#1379C3"/>
                <path d="M278.306 56.979C280.283 58.537 282.335 61.485 283.783 63.591C298.235 84.864 303.567 111.038 298.59 136.269C296.624 146.602 287.31 171.94 278.934 177.605C277.294 177.465 277.731 177.415 276.195 176.07C273.547 173.487 271.176 171.344 269.013 168.331C270.9 164.835 274.059 160.442 276.141 156.719C282.63 145.122 285.359 134.856 286.253 121.748C287.706 101.883 281.177 82.259 268.111 67.225C271.367 63.787 274.94 60.334 278.306 56.979Z" fill="#1379C3"/>
                <path d="M49.9901 57.363C52.2191 58.44 58.2041 65.037 60.2631 67.195C57.4471 71.023 54.5791 74.666 52.2341 78.814C35.2901 108.792 39.6481 141.738 60.1311 168.272C57.9961 170.54 55.5481 172.9 53.3321 175.122L50.1111 178.078C38.5951 165.597 29.9981 145.223 28.5201 128.381C26.0561 100.31 32.2541 78.894 49.9901 57.363Z" fill="#1379C3"/>
                <path d="M257.811 76.9021C258.369 77.2521 259.467 78.1691 259.893 78.7061C274.561 97.1891 276.096 125.284 266.604 146.433C264.94 150.143 261.803 155.767 258.776 158.449C257.044 158.43 257.925 158.626 256.205 157.067L248.015 149.267C261.09 126.822 263.379 109.381 248.163 86.9391C251.352 83.5671 254.568 80.2211 257.811 76.9021Z" fill="#1379C3"/>
                <path d="M69.5461 76.9711C72.7631 78.9321 77.3241 83.9771 80.0841 86.8701C73.0441 98.8461 69.2272 106.372 69.9142 120.67C70.5192 133.267 74.0061 138.619 80.2221 149.103C78.0351 151.209 75.8692 153.336 73.7242 155.484L70.0732 159.172C62.7932 150.438 58.0521 139.871 56.3681 128.626C53.5001 109.6 58.1581 92.3141 69.5461 76.9711Z" fill="#1379C3"/>
              </svg>
              <div className="flex flex-col text-sm font-semibold text-brand-600">
                <span>SINDICATO DOS</span>
                <span>RADIALISTAS</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation - Centralizado */}
          <nav
            aria-label="Global"
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2"
          >
            <ul className="flex items-center gap-8 text-sm">
              {linkItems.map((item, index) => (
                <li key={`${item.href}-${index}`}>
                  <a
                    className="text-primary transition hover:text-brand-600 font-medium"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botões de ação e menu mobile */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex sm:gap-4">
              {buttonItems.map((item, index) => (
                <NavButton key={`btn-${item.href}-${index}`} label={item.label} href={item.href} />
              ))}
            </div>

            {/* Hamburger Menu Button */}
            <button
              className="lg:hidden rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav aria-label="Mobile">
              <ul className="flex flex-col space-y-3">
                {linkItems.map((item, index) => (
                  <li key={`mobile-${item.href}-${index}`}>
                    <a
                      className="block text-primary transition hover:text-brand-600 font-medium py-2"
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
                {buttonItems.map((item, index) => (
                  <li key={`mobile-btn-${item.href}-${index}`} className="pt-2 sm:hidden">
                    <NavButton label={item.label} href={item.href} />
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
